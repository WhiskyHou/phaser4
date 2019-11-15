import { Matrix2D } from '@phaserjs/math-matrix2d';
import { Vec2 } from '@phaserjs/math-vec2';
export declare class Transform {
    readonly local: Matrix2D;
    readonly world: Matrix2D;
    protected _position: Vec2;
    protected _scale: Vec2;
    protected _skew: Vec2;
    protected _origin: Vec2;
    protected _rotation: number;
    protected dirty: boolean;
    private _a;
    private _b;
    private _c;
    private _d;
    constructor(x?: number, y?: number, rotation?: number, scaleX?: number, scaleY?: number);
    update(): boolean;
    setPosition(x: number, y: number): Transform;
    setScale(scaleX: number, scaleY: number): Transform;
    setSkew(skewX: number, skewY: number): Transform;
    setOrigin(originX: number, originY: number): Transform;
    setRotation(rotation: number): Transform;
    private updateCache;
    set x(value: number);
    get x(): number;
    set y(value: number);
    get y(): number;
    set rotation(value: number);
    get rotation(): number;
    set scaleX(value: number);
    get scaleX(): number;
    set scaleY(value: number);
    get scaleY(): number;
    set originX(value: number);
    get originX(): number;
    set originY(value: number);
    get originY(): number;
    set skewX(value: number);
    get skewX(): number;
    set skewY(value: number);
    get skewY(): number;
}
//# sourceMappingURL=Transform.d.ts.map