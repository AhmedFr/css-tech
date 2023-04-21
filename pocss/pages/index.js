import Section from "@/components/Section";

import { PrimaryButton, Button } from "@/components/tailwind/Button";
import {
  Button as StyledButton,
  PrimaryButton as StyledPrimaryButton,
} from "@/components/styled/Button";
import {
  Button as SassButton,
  PrimaryButton as SassPrimaryButton,
} from "@/components/sass/Button";
import { Product } from "@/components/tailwind/Product";

import { Product as SassProduct } from "@/components/sass/Product";

import { Button as MantineButton } from "@mantine/core";

export default function Home() {
  return (
    <div className='p-32'>
      <h1 className='text-6xl font-bold pb-8'>POCSS</h1>
      <p className='text-lg'>
        POCSS is a small project to compare different css technologies: Sass,
        styled-components and Tailwind.
      </p>
      <Section title='Sass' backgroundColor={"red"}>
        <SassButton>Click me</SassButton>
        <SassPrimaryButton>Click me</SassPrimaryButton>
        <SassProduct />
      </Section>
      <Section title='Styled components' backgroundColor={"blue"}>
        <StyledButton>Click me</StyledButton>
        <StyledPrimaryButton>Click me</StyledPrimaryButton>
      </Section>
      <Section title='Tailwind' backgroundColor={"green"}>
        <Button>Click me</Button>
        <PrimaryButton>Click me</PrimaryButton>
        <Product />
      </Section>
      <MantineButton>Click me</MantineButton>
    </div>
  );
}
