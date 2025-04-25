import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Line } from "react-konva";

type LineType = {
    points: number[];
    stroke: string;
    width: number;
};

const Pencil: React.FC = () => {
    const [lines, setLines] = useState<LineType[]>([]);
    const [isDrawing, setIsDrawing] = useState(false);
    const stageRef = useRef<any>(null);
    const [color, setColor] = useState("#000000");
    const [width, setWidth] = useState(2);
    const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!windowSize) return null;

    const startDraw = (e: any) => {
        setIsDrawing(true);
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        if (!point) return;
        setLines([...lines, { points: [point.x, point.y], stroke: color, width }]);
    };

    const moveDraw = (e: any) => {
        if (!isDrawing) return;
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        if (!point) return;
        const lastLine = lines[lines.length - 1];
        const newLines = lines.slice(0, lines.length - 1);
        lastLine.points = [...lastLine.points, point.x, point.y];
        setLines([...newLines, lastLine]);
    };

    const releaseDraw = () => {
        setIsDrawing(false);
    };

    const clear = () => {
        setLines([]);
    };

    return (
        <div className="p-4">
            <div className="mb-2 flex items-center gap-4">
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <input
                    type="range"
                    min={1}
                    max={10}
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                />
                <button
                    onClick={clear}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                >
                    Clear
                </button>
            </div>

            <Stage
                width={windowSize.width}
                height={windowSize.height - 100}
                onMouseDown={startDraw}
                onMouseMove={moveDraw}
                onMouseUp={releaseDraw}
                ref={stageRef}
                className="border border-gray-300 rounded"
            >
                <Layer>
                    {lines.map((line, i) => (
                        <Line
                            key={i}
                            points={line.points}
                            stroke={line.stroke}
                            strokeWidth={line.width}
                            tension={0.5}
                            lineCap="round"
                            globalCompositeOperation="source-over"
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    );
};

export default Pencil;

