"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { AcmeLogo } from "../components/icons/AcmeLogo";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { MailIcon } from "../components/icons/mail-icon";
import { PhoneIcon } from "../components/icons/phone-icon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const menuItems = ["Home", "About", "Projects"];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">Jeremy Munroe</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/projects" aria-current="page">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="primary" variant="flat" onPress={onOpen}>
              Contact
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Contact Me
              </ModalHeader>
              <ModalBody>
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  isReadOnly
                  defaultValue="jeremymunroe0@gmail.com"
                  variant="bordered"
                  label="Email"
                />
                <Input
                  endContent={
                    <PhoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  isReadOnly
                  defaultValue="+254717436421"
                  variant="bordered"
                  label="Phone Number"
                />
                <Button
                  color="primary"
                  as={Link}
                  href="https://github.com/j3rryl"
                  target="_blank"
                >
                  Github
                </Button>
                <Button
                  color="primary"
                  as={Link}
                  href="https://www.linkedin.com/in/jeremymunroe0"
                  target="_blank"
                >
                  Linkedin
                </Button>
                <Button
                  color="primary"
                  as={Link}
                  href="https://twitter.com/jeremymunroe0"
                  target="_blank"
                >
                  Twitter
                </Button>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  as={Link}
                  href="https://drive.google.com/file/d/1mAudkDxu730UnUyH51Ep7KuFRGHjvCGY/view?usp=drive_link"
                  target="_blank"
                >
                  Download CV
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
