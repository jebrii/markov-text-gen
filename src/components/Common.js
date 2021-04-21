import React from 'react'
import styled from 'styled-components'
import { v4 as genId } from 'uuid'

export const colors = {
  primary: '#FCA14B',
  secondary: '#BCF1FF',
  background: '#0B707F',
  clear: 'rgba(0,0,0,0)',
  text: '#000460',
  error: '#FF0033'
}

const styles = {
  textInputContainer: {
    diplay: 'flex',
    flexFlow: 'column nowrap',

  },
  textInputLabel: {

  },
  textInputError: {

  }
}

// === COMPONENTS ===

export const Header = styled.h1`
  font-size: 1.5em;
  text-align: ${props => props.textAlign ?? 'center'};
  color: ${colors.primary};
`

export const Typography = styled.p`
  color: ${props => colors[props.color] || colors.text};
  margin: ${props => props.margin ?? '0'};
`

export const Button = styled.button`
  background: ${props => props.primary ? colors.primary : colors.background};
  color: ${props => props.primary ? colors.background : colors.primary};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.primary};
  border-radius: 3px;
`
export const TextInput = ({
  label,
  error,
  dropdown,
  ...restOfProps
}) => {
  const id = genId()
  console.log("🚀 ~ id for ", label, ": ", id)

  return (
    <div style={styles.textInputContainer}>
      {label && <label for={`text-input-${id}`}>
        <Typography>{label}</Typography>
      </label>}
      <Input id={`text-input-${id}`} {...restOfProps} />
      {error && <Typography color='error'>{error}</Typography>}
    </div>
  )
}

const Input = styled.input`
  padding: 0.5em;
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
  min-height: ${props => props.minHeight ?? '12em'};
  color: ${props => props.textColor || colors.text};
  background: ${colors.secondary};
  border: none;
  border-radius: 3px;
`