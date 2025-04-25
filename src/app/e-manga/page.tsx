'use client';
import React, { useEffect, useState, useRef } from "react";
import { Stage, Layer, Line } from 'react-konva';
import Pencil from "./components-manga/Pencil";

export default function EMangaPage() {
    return (
        <div className="min-h-screen bg-white">
            <h1 className="text-3xl font-bold text-center py-4">E-Manga Drawing</h1>
            <Pencil />
        </div>
    );
}


