import {Component} from 'react'
import {
  Heading,
  TextBox,
  Label,
  GenerateButton,
  CustomForm,
  Container,
  OptionsDropDown,
  Option,
  Canvas,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '8',
  }

  memeGenerator = event => {
    event.preventDefault()
    this.setState({generate: true})
  }

  handleChange = (event, field) => {
    this.setState({[field]: event.target.value}, () => {
      console.log(this.state)
    })
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, generate} = this.state
    return (
      <Container>
        <CustomForm onSubmit={this.memeGenerator}>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="imageURL">Image URL</Label>
          <TextBox
            type="text"
            placeholder="Image URL"
            id="imageURL"
            value={imageUrl}
            onChange={event => this.handleChange(event, 'imageUrl')}
          />

          <Label htmlFor="topText">Top Text</Label>
          <TextBox
            type="text"
            placeholder="Top Text"
            id="topText"
            value={topText}
            onChange={event => this.handleChange(event, 'topText')}
          />

          <Label htmlFor="bottomText">Bottom Text</Label>
          <TextBox
            type="text"
            placeholder="Bottom Text"
            id="bottomText"
            value={bottomText}
            onChange={event => this.handleChange(event, 'bottomText')}
          />

          <Label htmlFor="fontSize">Font Size</Label>
          <OptionsDropDown
            id="fontSize"
            value={fontSize}
            onChange={event => this.handleChange(event, 'fontSize')}
          >
            {fontSizesOptionsList.map(each => (
              <Option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </Option>
            ))}
          </OptionsDropDown>

          <GenerateButton type="submit" className="submit-btn">
            Generate
          </GenerateButton>
        </CustomForm>
        {generate && (
          <Canvas data-testid="meme" imageUrl={imageUrl}>
            <Text fontSize={fontSize}>{topText}</Text>
            <Text fontSize={fontSize}>{bottomText}</Text>
          </Canvas>
        )}
      </Container>
    )
  }
}

export default MemeGenerator
