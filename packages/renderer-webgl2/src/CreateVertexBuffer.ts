import { VertexBuffer } from './VertexBuffer';
import { WebGL2Renderer } from './WebGL2Renderer';

export function CreateVertexBuffer (renderer: WebGL2Renderer, type: GLenum, itemSize: number, data: ArrayBufferView | number, usage?: GLenum): VertexBuffer
{
    return new VertexBuffer(renderer.gl, renderer.state, type, itemSize, data, usage);
}
