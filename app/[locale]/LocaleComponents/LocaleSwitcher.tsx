import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { routing } from '@/i18n/routing';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
            <option value="en" className='text-sm text-black'>English</option>
            <option value="jp" className='text-sm text-black'>日本語</option>
        </LocaleSwitcherSelect>
    );
}