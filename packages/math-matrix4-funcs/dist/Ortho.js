import { Matrix4 } from '@phaserjs/math-matrix4';
export function Ortho(left, right, bottom, top, near, far) {
    const lr = 1 / (left - right);
    const bt = 1 / (bottom - top);
    const nf = 1 / (near - far);
    const m00 = -2 * lr;
    const m11 = -2 * bt;
    const m22 = 2 * nf;
    const m30 = (left + right) * lr;
    const m31 = (top + bottom) * bt;
    const m32 = (far + near) * nf;
    return new Matrix4(m00, 0, 0, 0, 0, m11, 0, 0, 0, 0, m22, 0, m30, m31, m32, 1);
}
//# sourceMappingURL=Ortho.js.map