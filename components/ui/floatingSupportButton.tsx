import { Coffee } from 'lucide-react';

export default function FloatingSupportButton() {
    return (
        <a
            href="https://trakteer.id/arxycth/tip"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dukung Project"
            className="
                fixed
                bottom-6
                right-6
                z-50
                flex
                items-center
                gap-2
                rounded-full
                bg-red-600
                px-4
                py-3
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                hover:bg-red-700
                hover:shadow-xl
            "
        >
            <Coffee size={18} />

            <span className="hidden sm:inline font-medium">
                Dukung Project
            </span>
        </a>
    );
}