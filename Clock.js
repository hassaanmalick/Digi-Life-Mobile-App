import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default class DigiLifeLiveClock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }
  update = () => {
    this.setState({ time: new Date() });
  };
  componentDidMount() {
    setInterval(this.update, 1000);
  }
  render() {
    return (
      <View style={stylesheet.stylingView}>
        <Card style={stylesheet.stylingCard}>
          <Text style={stylesheet.styleText}>
            {this.state.time.toLocaleTimeString('en-US')}
          </Text>
        </Card>
      </View>
    );
  }
}

const stylesheet = StyleSheet.create({
  stylingView: {
    justifyContent: "center",
    marginTop: 94,
    textAlign: "center",
  },

  stylingCard: {
    textAlign: "center",
    padding: 49,
    marginRight: 14,
    marginLeft: 14,
  },

  styleText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 34,
    justifyContent: "center",   
  },
});