import type { FC } from 'react'
import type { GetImageResult } from 'astro'
import type { CollectionEntry } from 'astro:content'
import PhoneIcon from '~icons/material-symbols/phone-android-rounded'
import EmailIcon from '~icons/material-symbols/alternate-email-rounded'
import WebIcon from '~icons/material-symbols/globe-asia'
import LinkIcon from '~icons/material-symbols/arrow-outward-rounded'

const FooterComp: FC<{
  logo: GetImageResult
  site: CollectionEntry<'site'>
}> = ({ logo, site }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto px-8 pt-16 pb-12">
    <FooterLegalSection logo={logo} site={site} />
  </div>
)

const FooterLegalSection: FC<{
  logo: GetImageResult
  site: CollectionEntry<'site'>
}> = ({ logo, site }) => (
  <div className="flex flex-col gap-2">
    <img
      src={logo.src}
      width={logo.options.width}
      height={logo.options.height}
      className="w-max h-[50px]"
      alt={site.data.legal.name}
      loading="lazy"
      decoding="async"
    />
    <h3 className="text-lg md:text-xl font-bold mt-4">
      {site.data.legal.name}
    </h3>
    <p>NPWP: {site.data.legal.npwp}</p>
    <p>{site.data.legal.address}</p>
    <p className="flex flex-row items-center gap-[2px]">
      <span>
        <PhoneIcon />
      </span>
      <a href={`https://wa.me/62${site.data.legal.phone?.substring(1)}`}>
        {site.data.legal.phone}
      </a>
    </p>
    <p className="flex flex-row items-center gap-[2px]">
      <span>
        <EmailIcon />
      </span>
      <a href={`mailto:${site.data.legal.email}`}>{site.data.legal.email}</a>
    </p>
    <p className="flex flex-row items-center gap-[2px]">
      <span>
        <WebIcon />
      </span>
      <a href="/">{site.data.legal.website}</a>
    </p>
    <p className="flex flex-row items-center gap-[2px]">
      <span>
        <LinkIcon />
      </span>
      <a href="/legal">Info Legal</a>
    </p>
  </div>
)

export default FooterComp
