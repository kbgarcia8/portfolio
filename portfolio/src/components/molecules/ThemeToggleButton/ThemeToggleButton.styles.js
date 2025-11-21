import styled from "styled-components";
import { v } from "styles/variables.js";
import * as Switch from "@radix-ui/react-switch";
import { media } from "utils/utils.js";

export const Root = styled(Switch.Root)`
  height: 50%;
  width: 100%;
  background: ${({theme}) => theme.name === 'light' ? '#000000ff' : '#ccccccff'};
  border-radius: ${v.borderRadius.large};
  position: relative;
`;
export const Thumb = styled(Switch.Thumb)`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;

    ${media.mobile`
      background: ${({theme}) => theme.bg};
      width: 35%;
      height: 100%;
      &[data-state="checked"] {
        transform: translateX(185%);
      }
    `}
`;
