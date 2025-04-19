#version 300 es
precision mediump float;

uniform vec4 u_color;
uniform bool u_useTexture;
uniform sampler2D u_texture;

in vec2 v_texCoord;

out vec4 outColor;

void main() {
    if (u_useTexture) {
      outColor = texture(u_texture, v_texCoord) * vec4(u_color.rgb, 1.0);
    }
    else {
      outColor = u_color;
    }
}