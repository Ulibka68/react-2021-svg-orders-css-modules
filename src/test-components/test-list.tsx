import React from "react";
import styled from "@emotion/styled";

export const List = styled("ul")`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;

  ol& {
    counter-reset: numberedList;
  }
`;

type ListItemProps = {
  icon?: React.ReactNode;
  children?: string | React.ReactNode;
  className?: string;
};

const IconWrapper = styled("span")`
  display: flex;
  margin-right: 15px;
  height: 16px;
  align-items: center;
`;

export const ListItem = styled(
  ({ icon, className, children }: ListItemProps) => (
    <li className={className}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </li>
  )
)<ListItemProps>`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 34px;
  margin-bottom: 20px;

  /* Tiny circle and icon positioning */
  &:before,
  & > ${IconWrapper} {
    position: absolute;
    left: 0;
  }

  ul & {
    color: #aaa;
    /* This pseudo is the tiny circle for ul items */
    &:before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin-right: 15px;
      border: 1px solid #aaa;
      background-color: transparent;
      left: 5px;
      top: 10px;
    }

    /* Icon styles */
    ${(p) =>
      p.icon &&
      `
      span {
        top: 4px;
      }
      /* Removes tiny circle pseudo if icon is present */
      &:before {
        content: none;
      }
    `}
  }
  /* When the list is rendered as an <ol> */
  ol & {
    &:before {
      counter-increment: numberedList;
      content: counter(numberedList);
      top: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 18px;
      height: 18px;
      font-size: 10px;
      font-weight: 600;
      border: 1px solid #aaa;
      border-radius: 50%;
      background-color: transparent;
      margin-right: 20px;
    }
  }
`;

export const TestListEmotion = () => (
  <List>
    <ListItem icon={<IconWrapper color="orange400" />}>Item 1</ListItem>
    <ListItem icon={<IconWrapper color="orange400" />}>Item 2</ListItem>
    <ListItem icon={<IconWrapper color="orange400" />}>Item 3</ListItem>
  </List>
);
