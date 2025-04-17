#version 300 es
precision mediump float;

// Vertex attributes
in vec4 a_position;
in vec2 a_texCoord;

// Matrices
uniform mat4 u_projectionMatrix;
uniform mat4 u_viewMatrix;
uniform mat4 u_modelMatrix;

out vec2 v_texCoord;

void main() {
  gl_Position = u_projectionMatrix * u_viewMatrix * u_modelMatrix * a_position;
  v_texCoord = a_texCoord;
}