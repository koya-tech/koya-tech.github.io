import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function LocaleSwitcher() {
    const locale = useLocale();
    // unstable_setRequestLocale(locale);
    const t = useTranslations('LocaleSwitcher');

    return (
        <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
            <option value="en" className='text-sm text-black'>English</option>
            <option value="jp" className='text-sm text-black'>日本語</option>
        </LocaleSwitcherSelect>
    );
}