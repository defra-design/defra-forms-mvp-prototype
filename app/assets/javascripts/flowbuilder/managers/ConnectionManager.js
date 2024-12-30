// app/assets/javascripts/flowbuilder/managers/ConnectionManager.js

import { createSVGElement, calculatePath } from '../utils.js';

export class ConnectionManager {
  constructor(svgLayer, nodes) {
	this.svgLayer = svgLayer;
	this.nodes = nodes;
	this.connections = [];
	this.isDrawingLine = false;
	this.temporaryLine = null;
  }

  // Helper method to get transformed coordinates
  getTransformedCoordinates(element, canvasRect, zoomLevel) {
	const rect = element.getBoundingClientRect();
	return {
	  x: (rect.left - canvasRect.left) / zoomLevel,
	  y: (rect.top - canvasRect.top) / zoomLevel,
	  width: rect.width / zoomLevel,
	  height: rect.height / zoomLevel
	};
  }

  startDrawingConnection(e, nodeId, canvas, zoomLevel) {
	e.preventDefault();
	this.isDrawingLine = true;
	canvas.classList.add('drawing-connection');

	const point = e.target;
	const canvasRect = canvas.getBoundingClientRect();
	const pointRect = this.getTransformedCoordinates(point, canvasRect, zoomLevel);

	this.temporaryLine = createSVGElement('path');
	this.temporaryLine.setAttribute('class', 'connection-line temporary');

	this.temporaryStartX = pointRect.x + pointRect.width / 2;
	this.temporaryStartY = pointRect.y + pointRect.height / 2;

	this.svgLayer.appendChild(this.temporaryLine);
	this.startNodeId = nodeId;

	return this.handleConnection.bind(this);
  }

  handleConnection(e, canvas, zoomLevel) {
	if (!this.isDrawingLine) return;

	const canvasRect = canvas.getBoundingClientRect();
	const endX = (e.clientX - canvasRect.left) / zoomLevel;
	const endY = (e.clientY - canvasRect.top) / zoomLevel;

	const path = calculatePath(
	  this.temporaryStartX,
	  this.temporaryStartY,
	  endX,
	  endY
	);
	
	this.temporaryLine.setAttribute('d', path);
  }

  drawConnection(fromNode, toNode, zoomLevel) {
	const fromPoint = fromNode.querySelector('.connection-point.right');
	const toPoint = toNode.querySelector('.connection-point.left');

	if (fromPoint && toPoint) {
	  const canvasRect = this.svgLayer.getBoundingClientRect();
	  
	  const fromRect = this.getTransformedCoordinates(fromPoint, canvasRect, zoomLevel);
	  const toRect = this.getTransformedCoordinates(toPoint, canvasRect, zoomLevel);

	  const path = createSVGElement('path');
	  path.classList.add('connection-line');

	  const startX = fromRect.x + fromRect.width / 2;
	  const startY = fromRect.y + fromRect.height / 2;
	  const endX = toRect.x + toRect.width / 2;
	  const endY = toRect.y + toRect.height / 2;

	  const d = calculatePath(startX, startY, endX, endY);
	  path.setAttribute('d', d);
	  this.svgLayer.appendChild(path);
	}
  }

  // Rest of the methods remain the same...
  finishConnection(endNodeId) {
	if (this.startNodeId !== endNodeId) {
	  this.createConnection(this.startNodeId, endNodeId);
	}
	this.cleanupTemporaryConnection();
  }

  cleanupTemporaryConnection() {
	this.isDrawingLine = false;
	if (this.temporaryLine) {
	  this.temporaryLine.remove();
	  this.temporaryLine = null;
	}
  }

  createConnection(fromId, toId) {
	if (!this.connections.some(conn => conn.from === fromId && conn.to === toId)) {
	  this.connections.push({ from: fromId, to: toId });
	  this.updateConnections();
	}
  }

  updateConnections(zoomLevel = 1) {
	while (this.svgLayer.firstChild) {
	  this.svgLayer.removeChild(this.svgLayer.firstChild);
	}

	this.connections.forEach(conn => {
	  const fromNode = document.getElementById(conn.from);
	  const toNode = document.getElementById(conn.to);

	  if (fromNode && toNode) {
		this.drawConnection(fromNode, toNode, zoomLevel);
	  }
	});
  }

  removeConnectionsForNode(nodeId) {
	this.connections = this.connections.filter(c => c.from !== nodeId && c.to !== nodeId);
	this.updateConnections();
  }
}