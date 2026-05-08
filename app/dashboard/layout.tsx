//mengimpor <SideNav />komponen ke dalam layout Anda.
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-64">
                <SideNav />
            </div>
        <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    );
}

// partial rendering yang mempertahankan state React sisi klien di layout saat transisi antar halaman