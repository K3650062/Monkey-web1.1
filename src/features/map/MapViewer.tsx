"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

// Custom icon setup
const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});

export default function MapViewer() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className="h-full w-full bg-background animate-pulse flex items-center justify-center text-primary font-bold">Loading Map...</div>;
    }

    return (
        <MapContainer
            center={[0, 0]}
            zoom={3}
            scrollWheelZoom={true}
            className="h-full w-full z-0 rounded-3xl shadow-inner"
            style={{ background: "#F5F5F1" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" // Light theme tiles (Voyager)
            />

            {/* Amazon Rainforest */}
            <Marker position={[-3.4653, -62.2159]} icon={customIcon}>
                <Popup className="custom-popup">
                    <div className="p-2 min-w-[200px]">
                        <h3 className="text-lg font-heading font-bold text-primary mb-1">Amazon Rainforest</h3>
                        <p className="text-sm text-text-secondary mb-3">Home to the Pygmy Marmoset and Emperor Tamarin.</p>
                        <Button size="sm" variant="outline" className="w-full text-xs h-8" asChild>
                            <Link href="/species">View Species</Link>
                        </Button>
                    </div>
                </Popup>
            </Marker>

            {/* Borneo */}
            <Marker position={[-0.7893, 113.9213]} icon={customIcon}>
                <Popup className="custom-popup">
                    <div className="p-2 min-w-[200px]">
                        <h3 className="text-lg font-heading font-bold text-primary mb-1">Borneo</h3>
                        <p className="text-sm text-text-secondary mb-3">Native habitat of the Proboscis Monkey.</p>
                        <Button size="sm" variant="outline" className="w-full text-xs h-8" asChild>
                            <Link href="/species/proboscis-monkey">View Details</Link>
                        </Button>
                    </div>
                </Popup>
            </Marker>

            {/* Congo Basin */}
            <Marker position={[-0.2280, 15.8277]} icon={customIcon}>
                <Popup className="custom-popup">
                    <div className="p-2 min-w-[200px]">
                        <h3 className="text-lg font-heading font-bold text-primary mb-1">Congo Basin</h3>
                        <p className="text-sm text-text-secondary mb-3">The colorful Mandrill roams these forests.</p>
                        <Button size="sm" variant="outline" className="w-full text-xs h-8" asChild>
                            <Link href="/species/mandrill">View Details</Link>
                        </Button>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
}
