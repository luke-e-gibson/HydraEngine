export const CONSTS = {
  shapes: {
    Square: {
      vertices: [
        -0.5, -0.5, 0.0, 1.0, // Bottom left
        0.5, -0.5, 0.0, 1.0, // Bottom right
        0.5,  0.5, 0.0, 1.0, // Top right
        -0.5,  0.5, 0.0, 1.0, // Top left
      ],
      indices: [
        0, 1, 2, // First triangle
        2, 3, 0  // Second triangle
      ],
      texCords: [
        0.0, 1.0, // Top left
        1.0, 1.0, // Top right
        1.0, 0.0, // Bottom right
        0.0, 0.0, // Bottom left
      ]
    }
  }
}