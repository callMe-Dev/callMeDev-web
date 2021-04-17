import React from "react"
import historyBook from "../../assets/illustrations/history-book.svg"
import {
  AboutCommunityStyled,
  AboutCommunityTitle,
  SpanTitle,
  AboutCommunityText,

} from "./AboutCommunity.styles"

export default function AboutCommunity() {
  return (
    <AboutCommunityStyled>
      <div>
        <AboutCommunityTitle>Sobre la <SpanTitle>comunidad</SpanTitle> </AboutCommunityTitle><br/>
        <AboutCommunityText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt diam dui, et condimentum lorem interdum quis. Aenean posuere pulvinar massa in scelerisque. Vivamus elementum bibendum elit,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt diam dui, et condimentum lorem interdum quis. Aenean posuere pulvinar massa in scelerisque. Vivamus elementum bibendum elit
        </AboutCommunityText>
      </div>

    </AboutCommunityStyled>
  )
}
