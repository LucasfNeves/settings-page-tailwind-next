/**
 * @use_client
 *
 * Usamos o componente Tabs do Radix UI para criar as abas de configurações
 * Esse componente faz o uso de JavaScript no lado do cliente, por isso criamos ele separado dos outros componentes.
 * O 'use client' é um comentário que indica que o componente faz uso de JavaScript no lado do cliente.
 * Isso é importante para que o Next.js não tente renderizar o componente no lado do servidor.
 * Caso o componente seja renderizado no lado do servidor, o JavaScript não será executado e o componente não funcionará.
 */

'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="my-details"
          title="My details"
          isSelected={currentTab === 'my-details'}
        />
        <TabItem
          value="profile"
          title="Profile"
          isSelected={currentTab === 'profile'}
        />
        <TabItem
          value="password"
          title="Password"
          isSelected={currentTab === 'password'}
        />
        <TabItem value="team" title="Team" isSelected={currentTab === 'team'} />
        <TabItem value="plan" title="Plan" isSelected={currentTab === 'plan'} />
        <TabItem
          value="billing"
          title="Billing"
          isSelected={currentTab === 'billing'}
        />
        <TabItem
          value="email"
          title="Email"
          isSelected={currentTab === 'email'}
        />
        <TabItem
          value="notifications"
          title="Notifications"
          isSelected={currentTab === 'notifications'}
        />
        <TabItem
          value="integrations"
          title="Integrations"
          isSelected={currentTab === 'integrations'}
        />
        <TabItem value="api" title="API" isSelected={currentTab === 'api'} />
      </Tabs.List>
    </Tabs.Root>
  )
}
