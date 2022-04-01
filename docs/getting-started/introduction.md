---
title: Introdução
slug: /
---

## O que é o Neutralinojs?

Neutralinojs é uma estrutura de desenvolvimento de aplicativos desktop leve e portátil. Ele permite que você desenvolva aplicativos de desktop leves e multiplataforma usando JavaScript, HTML e CSS. Você pode estender o Neutralinojs com qualquer linguagem de programação (via extensões IPC) e usar o Neutralinojs como parte de qualquer arquivo de origem (via processos filho IPC).

## Porque o Neutralinojs?

No Electron e no NWjs, você precisa instalar o Node.js e centenas de bibliotecas de dependência. O Chromium e o Node incorporados tornam os aplicativos simples inchados. Neutralinojs oferece um SDK leve e portátil que é uma alternativa para Electron e NW.js. O Neutralinojs não inclui o Chromium e usa a biblioteca do navegador da Web existente no sistema operacional (por exemplo: gtk-webkit2 no Linux). Neutralinojs implementa uma conexão WebSocket para operações nativas e incorpora um servidor web estático para servir o conteúdo web. Além disso, oferece uma [biblioteca cliente JavaScript integrada](https://github.com/neutralinojs/neutralino.js) para desenvolvedores.

Veja as comparaçõess:
- [Neutralinojs vs Electron vs NW.JS vs Tauri vs NodeGui vs Flutter vs .Net MAUI](https://github.com/Elanis/web-to-desktop-framework-comparison)
- [Neutralinojs vs Electron vs NW.js (2018)](https://github.com/neutralinojs/evaluation)

Quando você começar a aprender o Neutralinojs, perceberá que o Neutralinojs responde a inúmeros casos de uso. Por exemplo, você pode usar Neutralinojs para os seguintes cenários.

- Desenvolvimento de aplicativos de desktop multiplataforma.
- Criando aplicativos da Web com operações nativas.
- Usando como um agente de mensagens na nuvem.
- Conectando vários processos usando como um broker IPC.
- e mais...

## Recursos destacados

- Kit de desenvolvimento portátil.
- Nenhuma compilação necessária para desenvolvedores de aplicativos.
- Nenhuma dependência adicional necessária para os usuários.
- Suporte a funções nativas: Leia arquivos, execute comandos do sistema, etc.
- Menos intensivo de recursos em comparação com chromium-node-based frameworks.
- Cross-platform: Neutralinojs aplicativos funcionam em Linux, Windows, macOS e Web.
- Ambiente de desenvolvimento simples e flexível.

## Ambiente de desenvolvimento simples e flexível

O neu CLI fornece binários x64 pré-criados para Linux, macOS e Windows. No entanto, você pode construir Neutralinojs 39 binários da fonte em quase todos os sistemas operacionais de desktop e arquiteturas de CPU existentes.

Se você precisar de binários Neutralinojs para CPU não x64, aprenda como construir Neutralinojs a partir da fonte com [esse manual](contributing/framework-developer-guide#setup-and-build-the-framework).
