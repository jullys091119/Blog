import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const CardComments = ({user, keyProp, content,date, icon}) => {
  console.log(user,"users")
  return(
  <Card key={keyProp}  style={{marginVertical:10}} mode='contained'>
    <Card.Title title={user} subtitle={date} left={icon} />
    <Card.Content>
      <Text variant="titleMedium">{content}</Text>
    </Card.Content>
   {/*  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
    <Card.Actions>
      <Button>Responder</Button>
    </Card.Actions>
  </Card>
)};

export default CardComments;