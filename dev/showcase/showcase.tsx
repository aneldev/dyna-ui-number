import * as React from 'react';
import {DynaNumber, EColor} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import "./showcase.less";
import {EMode, ESize} from "dyna-ui-field-wrapper";

export default {
  logo: <Logo/>,
  views: [
    {
      slug: 'intro',
      faIconName: 'circle-o-notch',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>dyna-ui-number</h3>
        </div>
      ),
    },

    {
      slug: 'number-simple',
      faIconName: 'flask',
      title: 'number simple test',
      center: true,
      component: (() => {
        interface IMyAppProps {
          mode?: EMode;
          size?: ESize;
          color?: EColor;
        }

        interface IMyAppState {
          age: number;
        }

        class MyApp extends React.Component<IMyAppProps, IMyAppState> {
          constructor(props: IMyAppProps) {
            super(props);
            this.state = {
              age: 12,
            };
          }

          private handleChange(name: string, value: number): void {
            this.setState({age: value});
            console.log('onchange',name,value);
          }

          public render(): JSX.Element {
            const {mode, size, color} = this.props;
            const {age} = this.state;
            return (<DynaNumber
              label="Age"
              name="age"
              size={size}
              mode={mode}
              color={color}
              value={age}
              onChange={this.handleChange.bind(this)}
            />)
          }
        }

        return <MyApp/>
      })(),
      wrapperStyle: {},
      props: [] .concat(
        Object.keys(ESize).map((size: ESize) => ({
          slug: `size-${size}`,
          title: `Size ${size.toLowerCase()}`,
          props: {
            size,
          }
        })),
        Object.keys(EColor).map((color: EColor) => ({
          slug: `color-${color}`,
          title: `Color ${color.toLowerCase()}`,
          props: {
            color,
          }
        })),
        Object.keys(EMode).map((mode: EMode) => ({
          slug: `mode-${mode}`,
          title: `Mode ${mode.toLowerCase()}`,
          props: {
            mode,
          }
        })),

      )
    },

    {
      slug: 'precision',
      faIconName: 'flask',
      title: 'number precision 1 example',
      center: true,
      component: (() => {
        interface IMyAppProps {
        }

        interface IMyAppState {
          teperature: number;
        }

        class MyApp extends React.Component<IMyAppProps, IMyAppState> {
          constructor(props: IMyAppProps) {
            super(props);
            this.state = {
              teperature: 12,
            };
          }

          private handleChange(name: string, value: number): void {
            this.setState({teperature: value});
            console.log('onchange',name,value);
          }

          public render(): JSX.Element {
            const {teperature} = this.state;
            return (<DynaNumber
              label="Temperature"
              name="temperature"
              step={0.1}
              precision={1}
              value={teperature}
              onChange={this.handleChange.bind(this)}
            />)
          }
        }

        return <MyApp/>
      })(),
      wrapperStyle: {},
    },

    {
      slug: 'min-max',
      faIconName: 'flask',
      title: 'number precision 1 and min max',
      description: 'min 11.5 max 13',
      center: true,
      component: (() => {
        interface IMyAppProps {
        }

        interface IMyAppState {
          teperature: number;
        }

        class MyApp extends React.Component<IMyAppProps, IMyAppState> {
          constructor(props: IMyAppProps) {
            super(props);
            this.state = {
              teperature: 12,
            };
          }

          private handleChange(name: string, value: number): void {
            this.setState({teperature: value});
            console.log('onchange',name,value);
          }

          public render(): JSX.Element {
            const {teperature} = this.state;
            return (<DynaNumber
              label="Temperature"
              name="temperature"
              min={11.5}
              max={13.0}
              step={0.1}
              precision={1}
              validationMessage="test validation message"
              value={teperature}
              onChange={this.handleChange.bind(this)}
            />)
          }
        }

        return <MyApp/>
      })(),
      wrapperStyle: {},
    },

    {
      slug: 'the-end',
      title: 'the end',
      description: 'Thank you',
      center: true,
      component: (
        <div style={{textAlign: 'center'}}>
          <h1>The end</h1>
        </div>
      ),
    },
  ]
}as IShowcase;
