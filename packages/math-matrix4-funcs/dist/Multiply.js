import { Matrix4 } from '@phaserjs/math-matrix4';
export function Multiply(a, b) {
    const { m00: a00, m01: a01, m02: a02, m03: a03, m10: a10, m11: a11, m12: a12, m13: a13, m20: a20, m21: a21, m22: a22, m23: a23, m30: a30, m31: a31, m32: a32, m33: a33 } = a;
    const { m00: b00, m01: b01, m02: b02, m03: b03, m10: b10, m11: b11, m12: b12, m13: b13, m20: b20, m21: b21, m22: b22, m23: b23, m30: b30, m31: b31, m32: b32, m33: b33 } = b;
    const m00 = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
    const m01 = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
    const m02 = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
    const m03 = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
    const m10 = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
    const m11 = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
    const m12 = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
    const m13 = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
    const m20 = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
    const m21 = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
    const m22 = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
    const m23 = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
    const m30 = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
    const m31 = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
    const m32 = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
    const m33 = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;
    return new Matrix4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
}
//# sourceMappingURL=Multiply.js.map