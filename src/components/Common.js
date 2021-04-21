import React from 'react'
import styled from 'styled-components'

export const colors = {
  primary: '#FCA14B',
  secondary: '#BCF1FF',
  background: '#0B707F',
  clear: 'rgba(0,0,0,0)',
  text: '#000460'
}

export const Header = styled.h1`
  font-size: 1.5em;
  text-align: ${props => props.textAlign ?? 'center'};
  color: ${colors.primary};
`
export const Button = styled.button`
  background: ${props => props.primary ? colors.primary : colors.background};
  color: ${props => props.primary ? colors.background : colors.primary};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.primary};
  border-radius: 3px;
`

export const TextInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  min-width: 160px;
  color: ${props => props.textColor || colors.text};
  background: ${colors.secondary};
  border: none;
  border-radius: 3px;
`

export const Dropdown = styled.select`
  padding: 0.5em;
  margin: 0.5em;
  min-width: 160px;
  color: ${props => props.textColor || colors.text};
  background: ${colors.secondary};
  border: none;
  border-radius: 3px;
`

export const TextRegion = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  min-height: ${props => props.minHeight ?? '12em'};
  color: ${props => props.textColor || colors.text};
  background: ${colors.secondary};
  border: none;
  border-radius: 3px;
`