import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import theme from "../theme";
import ImageDialog from "../Components/ImageDialog";
import GamesComponent from "../Components/GamesComponent";
import ImageSlider from '../Components/ImageSlider.tsx'
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Uvod() {
  return (
    <>
      <GamesComponent />

      <div className="grid md:grid-cols-[66%_34%] gap-3">
        {/* Pieršy słupok */}
        <div className="grid grid-cols-1 gap-3">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="leading-relaxed">
                V rámci projektu Týden hokeje – Pojď hrát hokej, proběhla rovněž
                náborová akce ve Velkých Popovicích.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-normal">
                Akce se konala v sobotu 28.09.2024 odpoledne na místním zimním
                stadionu. Několik dní před událostí jsme obešli spousty škol a
                školek, a i jiných dětských zařízení a snažili se na akci
                přilákat co nejvíce dětí. Událost byla avizována na našem webu,
                facebooku i instagramu a našich nástěnkách. Před samotnou akcí
                probíhaly v rámci propagace...{" "}
                <a
                  target="_blank"
                  href="http://www.hcslavojvelkepopovice.cz/uvod/clanek_2024_9.pdf"
                  className="font-bold hover:underline"
                >
                  Více zde.
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center leading-10">
              <CardTitle className="text-base font-bold hover:underline">
                <a href="https://www.budkozel.cz/">
                  Pro fanoušky našeho klubu zde odkaz na náš fanshop / merch
                </a>
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="leading-relaxed">
                Nábor otevřený v průběhu celé sezóny. Již jsme začali a budeme
                se na Vás těšit.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-normal">
                Nábor je určen dětem ročníku 2016 a mladším. Tréninky probíhají
                v úterý 14:45-15:45 a pátek 13:15-14:15. Buď taky kozel z
                Popovic!!! Kontakt na trenéra p. Černý tel. 723 938 884
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <CardTitle>AKCE - MIMOŘÁDNÁ NABÍDKA ledů 2024</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Druhi słupok */}
        <div className="flex flex-col items-start">
          <ImageSlider />
        </div>
      </div>
    </>
  );
}

export default Uvod;
