import { Coffee, Heart } from 'lucide-react';

export default function SupportCard() {
    return (
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-500/10 mb-4">
                <Coffee className="w-8 h-8 text-red-600" />
            </div>

            <h3 className="text-2xl font-bold mb-2">
                Dukung Pengembangan Project
            </h3>

            <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-6">
                Jika project ini bermanfaat, Anda dapat memberikan dukungan
                melalui Trakteer. Dukungan Anda membantu pengembangan fitur,
                peningkatan kualitas project, dan pembuatan project open-source lainnya.
            </p>

            <a
                href="https://trakteer.id/arxycth/tip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium transition-all"
            >
                <Heart className="w-4 h-4" />
                Dukung via Trakteer
            </a>
        </div>
    );
}