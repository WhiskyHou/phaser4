//  Sets the target Matrix4 to an identity matrix + a Mat2D translate, rotate z and scale and returns it
export function ITRS(target, x, y, angle, scaleX, scaleY) {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    const a = cos * scaleX;
    const b = sin * scaleX;
    const c = -sin * scaleY;
    const d = cos * scaleY;
    return target.set(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, x, y, 0, 1);
}
//# sourceMappingURL=ITRS.js.map