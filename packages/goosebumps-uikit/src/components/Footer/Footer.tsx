import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledText,
  StyledSocialLinks,
  StyledToolsContainer,
} from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import CakePrice from "../CakePrice/CakePrice";
import { LogoWithTextIcon, ArrowForwardIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    // <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
    //   <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
    //     <StyledIconMobileContainer display={["block", null, "none"]}>
    //       <LogoWithTextIcon isDark width="130px" />
    //     </StyledIconMobileContainer>
    //     <Flex
    //       order={[2, null, 1]}
    //       flexDirection={["column", null, "row"]}
    //       justifyContent="space-between"
    //       alignItems="flex-start"
    //       mb={["42px", null, "36px"]}
    //     >
    //       {items?.map((item) => (
    //         <StyledList key={item.label}>
    //           <StyledListItem>{item.label}</StyledListItem>
    //           {item.items?.map(({ label, href, isHighlighted = false }) => (
    //             <StyledListItem key={label}>
    //               {href ? (
    //                 <Link
    //                   href={href}
    //                   target="_blank"
    //                   rel="noreferrer noopener"
    //                   color={isHighlighted ? baseColors.warning : darkColors.text}
    //                   bold={false}
    //                 >
    //                   {label}
    //                 </Link>
    //               ) : (
    //                 <StyledText>{label}</StyledText>
    //               )}
    //             </StyledListItem>
    //           ))}
    //         </StyledList>
    //       ))}
    //       <Box display={["none", null, "block"]}>
    //         <LogoWithTextIcon isDark width="160px" />
    //       </Box>
    //     </Flex>
    //     <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} />
    //     <StyledToolsContainer
    //       order={[1, null, 3]}
    //       flexDirection={["column", null, "row"]}
    //       justifyContent="space-between"
    //     >
    //       <Flex order={[2, null, 1]} alignItems="center">
    //         <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
    //         <LangSelector
    //           currentLang={currentLang}
    //           langs={langs}
    //           setLang={setLang}
    //           color={darkColors.textSubtle as keyof Colors}
    //           dropdownPosition="top-right"
    //         />
    //       </Flex>
    //       <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
    //         <Box mr="20px">
    //           <CakePrice cakePriceUsd={cakePriceUsd} color={darkColors.textSubtle as keyof Colors} />
    //         </Box>
    //         <Button
    //           as="a"
    //           href="https://goosebumps.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
    //           target="_blank"
    //           scale="sm"
    //           endIcon={<ArrowForwardIcon color={lightColors.backgroundAlt} />}
    //         >
    //           {buyCakeLabel}
    //         </Button>
    //       </Flex>
    //     </StyledToolsContainer>
    //   </Flex>
    // </StyledFooter>
    <div className="footer-area pt-100">
      <div className="container">
          <div className="row">
              <div className="col-md-5">
                  <div className="single-footer-widget">
                      <img src="/images/goosebumps/logo.png" alt="Goosebumps" />

                      <p>Goosebumps powered by Empire Token is a decentralized exchange with a unique portfolio tracking and charting system.</p>
                  </div>
              </div>

              <div className="col-md-3">
                  <div className="single-footer-widget">
                      <h3>Follow Us</h3>

                      <ul className="socil-link">
                          <li>
                              <a href="https://www.instagram.com/empiretoken/" target="_blank" rel="noopener noreferrer">
                                  <i className="fab fa-instagram"></i>
                              </a>
                          </li>
                          <li>
                              <a href="https://twitter.com/RealEmpireToken" target="_blank" rel="noopener noreferrer">
                                  <i className="fab fa-twitter"></i>
                              </a>
                          </li>
                          <li>
                              <a href="https://t.me/empiretokenworld" target="_blank" rel="noopener noreferrer">
                                  <i className="fab fa-telegram"></i>
                              </a>
                          </li>
                          <li>
                              <a href="https://www.youtube.com/channel/UCYSHk8YsR1jxNR64ezx6q3Q" target="_blank" rel="noopener noreferrer">
                                  <i className="fab fa-youtube"></i>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>

              <div className="col-md-4">
                  <p className="text-warning">partnership with</p>
                  <a href="https://empiretoken.world" target="_blank" rel="noopener noreferrer" className="empiretoken">empiretoken.world</a>
              </div>
          </div>
      </div>

      <div className="copy-right-area pt-70">
          <div className="container">
              <div className="copy-right-wrap">
                  <div className="text-center">
                      <p>© 2021 Goosebumps . All Rights Reserved</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default MenuItem;
