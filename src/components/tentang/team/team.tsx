import type { FC } from 'react'
import * as Avatar from '@radix-ui/react-avatar'
import type { GetImageResult } from 'astro'

const TeamComp: FC<{ members: any[] }> = ({ members }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
      {members.map((member, i) => (
        <div className="card bg-base-100" key={i}>
          <div className="card-body items-center gap-4 text-center">
            <TeamAvatar image={member.imageProps} name={member.name} />
            <h3 className="text-2xl font-bold leading-snug">{member.name}</h3>
            <p className="text-base leading-snug">{member.pos}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const TeamAvatar: FC<{ image: GetImageResult; name: string }> = ({
  image,
  name,
}) => {
  const getInitials = (name: string) =>
    name
      .split(' ')
      .reduce((res, name) => res + name.charAt(0), '')
      .substring(0, 2)
      .toUpperCase()
  return (
    <Avatar.Root className="inline-flex h-[100px] w-[100px] select-none items-center justify-center overflow-hidden rounded-full align-middle bg-gradient-to-r from-primary to-accent">
      <Avatar.Image
        className="border-4 border-transparent h-full w-full rounded-[inherit] object-cover"
        src={image.src}
        width={150}
        height={150}
        alt={getInitials(name)}
      />
      <Avatar.Fallback className="font-bold text-base-100 text-4xl">
        {getInitials(name)}
      </Avatar.Fallback>
    </Avatar.Root>
  )
}

export default TeamComp
