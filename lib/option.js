const React = require('react-native');

const {
  StyleSheet,
  Component,
  View,
  TouchableWithoutFeedback,
  Text
} = React;

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style, styleText, onPress } = this.props;

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[ styles.container, style ]}>
          <Text style={ styleText }>{this.props.children}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Option.propTypes = {
  children: React.PropTypes.string.isRequired
};

module.exports = Option;
