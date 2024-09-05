"use client";
import { Pagination , Button ,Textarea , Space, Container, Text, Title, Rating, Group, Divider } from "@mantine/core";


export default function Home() {
 
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Space h="sm"/>
      <Title order={4}>Your rating</Title>

      <Rating size="lg" defaultValue={0} count={5}/>

      <Textarea
      label="Your review"
      placeholder="Do you enjoy eating?"
      mt="xs"
      autosize
      minRows={3}
      maxRows={3}
    />
 
    <Space h="sm"/>
    <Button  variant="filled" color="orange">Submit Review</Button>

    <Divider my="md"/>

    <Group justify="center">
       <Title order={4}>Elon Musk</Title>
       <Rating size="18px" value={5} readOnly />
    </Group>
 
    <Space h="xs"/>
    <Text ta="center" c="dimmed" size="15px">
       Best pizza in this world. I give you X sxore.
    </Text>

    <Divider my="md"/>

    <Group justify="center">
       <Title order={4}>Mark Zuck</Title>
       <Rating size="18px" value={4} readOnly />
    </Group>
    
    <Space h="xs"/>
    <Text ta="center" c="dimmed" size="15px">
       My favourite part is pepperoni
    </Text>
    
    <Space h="sm"/>
    <Group justify="center">
        <Pagination total={20} variant="filled" boundaries={1} defaultValue={1} color="orange"/>
    </Group>
    
    <Space h="10px"/>
      <Text ta="center" my="sm" c="dimmed" size="15px">
        Copyright © 2024 Thanchanok Naensin 660610763
      </Text>
    </Container>
  );
}
