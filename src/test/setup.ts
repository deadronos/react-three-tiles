import { vi } from 'vitest';
import '@testing-library/jest-dom';

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(globalThis, 'ResizeObserver', {
  value: ResizeObserverMock,
  writable: true,
});

Object.defineProperty(globalThis, 'window.matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock WebGL for tests
const mockGetContext = vi.fn();
HTMLCanvasElement.prototype.getContext = mockGetContext;
mockGetContext.mockReturnValue({
  canvas: {},
  getContextAttributes: () => ({}),
  getParameter: () => 0,
  getExtension: () => null,
  createShader: () => ({}),
  createProgram: () => ({}),
  attachShader: () => {},
  linkProgram: () => {},
  useProgram: () => {},
  getAttribLocation: () => 0,
  getUniformLocation: () => ({}),
  uniform1f: () => {},
  uniform2f: () => {},
  uniform3f: () => {},
  uniform4f: () => {},
  uniform1i: () => {},
  uniformMatrix4fv: () => {},
  enableVertexAttribArray: () => {},
  vertexAttribPointer: () => {},
  bindBuffer: () => {},
  createBuffer: () => ({}),
  bufferData: () => {},
  drawArrays: () => {},
  drawElements: () => {},
  enable: () => {},
  disable: () => {},
  cullFace: () => {},
  frontFace: () => {},
  depthFunc: () => {},
  depthMask: () => {},
  blendFunc: () => {},
  blendFuncSeparate: () => {},
  viewport: () => {},
  clear: () => {},
  clearColor: () => {},
  clearDepth: () => {},
  createTexture: () => ({}),
  bindTexture: () => {},
  texImage2D: () => {},
  texParameteri: () => {},
  activeTexture: () => {},
  generateMipmap: () => {},
  pixelStorei: () => {},
} as unknown as WebGLRenderingContext);
