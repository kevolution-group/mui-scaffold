import type { Meta, StoryObj } from '@storybook/react'
import { Scaffold } from '../lib/scaffold.tsx'
import { DefaultChild } from './components/default-child.tsx'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Demo/Scaffold',
  component: Scaffold,
  tags: ['autodocs']
} satisfies Meta<typeof Scaffold>

export default meta

type Story = StoryObj<typeof Scaffold>

export const Default: Story = {
  render: () => (
    <Scaffold>
      <DefaultChild />
    </Scaffold>
  )
}
