import { Metadata } from 'next';
import { Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';

//Konfigurasi font
const Jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-jakarta',
})

export const metadata: Metadata = {
    title: 'Sains Data Uin Salatiga',
    description: 'Program Studi Sains Data UIN Salatiga. Siapkan karirmu di era AI dan Big Data dengan keahlian analisis data, pembelajaran mesin, dan kecerdasan buatan.'
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${Jakarta.variable} bg-background text-textMain antialiased overflow-x-hidden`}>
                {children}
            </body>
        </html>
    )    
}


