'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import clsx from 'clsx';
import { useLocale } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useParams } from 'next/navigation';
import { ChangeEvent, ReactNode, useTransition } from 'react';

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
};

export default function LocaleSwitcherSelect({
    children,
    defaultValue,
    label
}: Props) {
    const locale = useLocale();

    // Set the locale to enable static rendering
    unstable_setRequestLocale(locale);
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                pathname,
                { locale: nextLocale }
            );
        });
    }

    return (
        <label
            className={clsx(
                'relative text-xl',
                isPending && 'transition-opacity [&:disabled]:opacity-30'
            )}
        >
            <p className="sr-only text-gray-400">{label}</p>
            <select
                className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {children}
            </select>
            {/* <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span> */}
        </label>
    );
}