# Landing Page de Alta Conversão - Dr. Fabrício Bittencourt
### Advocacia Especializada em Direito de Família e Inventário Judicial

Esta é uma landing page profissional, moderna, responsiva e altamente otimizada para campanhas de **Google Ads** (Rede de Pesquisa) para captação de leads e orientação jurídica em:
- **Pensão Alimentícia** (Fixação, Execução de Atrasados, Revisional e Exoneração)
- **Guarda dos Filhos** (Compartilhada, Unilateral e Regulamentação de Convivência/Visitas)
- **Alimentos e Família** (Alimentos Gravídicos e Dependentes)
- **Inventário Judicial** (Abertura de Inventário, Partilha de Bens e Sucessões)

---

## 📱 Configuração Centralizada do WhatsApp

O número oficial do WhatsApp está centralizado no código em uma única variável:

- **Número cadastrado:** `5548991774043` (Telefone: `(48) 99177-4043`)
- **Link padrão utilizado:** `https://wa.me/5548991774043`

### Como alterar o número do WhatsApp:

1. **Na versão React (Vite):**
   Abra o arquivo `src/config/whatsapp.ts` e altere a constante:
   ```typescript
   export const WHATSAPP_NUMBER = "5548991774043"; // Digite apenas números com DDD (ex: 5548991774043)
   export const DISPLAY_PHONE = "(48) 99177-4043";
   ```

2. **Na versão Estática Standalone (`public/standalone/`):**
   Abra o arquivo `public/standalone/js/script.js` e altere a primeira linha:
   ```javascript
   const WHATSAPP_NUMBER = "5548991774043";
   ```
   E substitua os links `https://wa.me/5548991774043` no arquivo `public/standalone/index.html`.

---

## 📊 Configuração de Rastreamento (Google Ads, GTM, GA4 e Meta Pixel)

A landing page já possui toda a estrutura preparada para rastreamento de conversões (cliques no WhatsApp e envios de formulário).

### Onde inserir os scripts de rastreamento:

1. **Via `index.html` (Recomendado):**
   Abra o arquivo `index.html` e descomente os blocos indicados entre a linha 30 e 70 para colar suas tags:
   - **Google Tag Manager (GTM):** Cole a tag de `<head>` e o `<noscript>` do body.
   - **Google Ads Conversion ID:** Substitua `AW-XXXXXXXXX` pelo seu código de conversão do Google Ads.
   - **Google Analytics 4 (GA4):** Substitua `G-XXXXXXXXXX` pelo seu ID de Medição.
   - **Meta Pixel (Facebook/Instagram Ads):** Substitua `YOUR_PIXEL_ID` pelo ID do seu pixel.

2. **Via módulo `src/config/tracking.ts`:**
   Altere as constantes no arquivo `src/config/tracking.ts`:
   ```typescript
   export const TRACKING_CONFIG = {
     GTM_ID: "GTM-XXXXXXX",
     GA4_MEASUREMENT_ID: "G-XXXXXXXXXX",
     GOOGLE_ADS_CONVERSION_ID: "AW-123456789",
     GOOGLE_ADS_CONVERSION_LABEL: "AbCdEfGhIjKlMnOpQrS",
     META_PIXEL_ID: "123456789012345",
   };
   ```

---

## 👤 Como alterar informações do Advogado

Para alterar o nome do advogado, links de redes sociais ou descrições:
- Abra o arquivo `src/data/landingData.ts` e edite o objeto `ATTORNEY_INFO`:
  ```typescript
  export const ATTORNEY_INFO = {
    name: "Dr. Fabrício Bittencourt",
    title: "Advogado Especializado em Direito de Família e Sucessões",
    instagramHandle: "@fabriciobittadv",
    instagramUrl: "https://www.instagram.com/fabriciobittadv/",
    // ...
  };
  ```

---

## 🐙 Passo a Passo para Subir o Projeto no GitHub

1. **Criar um novo repositório no GitHub:**
   - Acesse [github.com/new](https://github.com/new).
   - Nomeie o repositório (exemplo: `landing-page-advocacia`).
   - Mantenha como **Público** ou **Privado**.
   - **Não** inicialize com README ou .gitignore (este projeto já contém ambos).
   - Clique em **Create repository**.

2. **Enviar os arquivos do seu computador para o GitHub:**
   Abra o terminal na pasta do projeto e execute:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Landing Page Advocacia Dr. Fabrício Bittencourt"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   git push -u origin main
   ```

---

## 🌐 Passo a Passo para Publicar na Hostinger

Você pode publicar na Hostinger de duas formas extremamente fáceis:

### Opção A: Publicação Estática Direta (Mais Simples - Sem Node.js)
1. Acesse o painel **hPanel** da Hostinger.
2. Vá em **Sites** -> clique no seu domínio -> **Gerenciador de Arquivos**.
3. Abra a pasta `public_html`.
4. Envie o conteúdo que está dentro da pasta `public/standalone/` do projeto:
   - `index.html` (deve ficar na raiz de `public_html`)
   - Pasta `css/`
   - Pasta `js/`
5. Pronto! O site abrirá imediatamente ao acessar seu domínio.

---

### Opção B: Compilação Vite (Versão React Completa)
1. No seu computador, execute o comando de build no terminal:
   ```bash
   npm run build
   ```
2. Uma pasta chamada `dist/` será gerada no projeto.
3. No **Gerenciador de Arquivos** da Hostinger, abra a pasta `public_html`.
4. Envie todos os arquivos gerados **DENTRO** da pasta `dist/` diretamente para a `public_html`.
5. O arquivo `dist/index.html` deve ficar diretamente em `public_html/index.html`.

---

## 🔒 Como Configurar Domínio e Ativar HTTPS / SSL Grátis na Hostinger

1. **Configurar Apontamento de Domínio:**
   - Se o seu domínio foi comprado na Hostinger, ele já estará configurado automaticamente.
   - Se foi comprado no Registro.br ou GoDaddy, altere os servidores DNS para os da Hostinger:
     - `ns1.dns-parking.com`
     - `ns2.dns-parking.com`

2. **Ativar SSL Grátis (HTTPS):**
   - No hPanel da Hostinger, vá na aba **Segurança** -> **SSL**.
   - Clique em **Instalar SSL** e selecione o seu domínio.
   - Marque a opção **Forçar HTTPS** para garantir que todas as conexões sejam seguras.

---

## 🧪 Checklist de Verificação Pós-Publicação

Antes de iniciar os anúncios no Google Ads, verifique:

- [x] O site abre rapidamente em smartphones e computadores.
- [x] O botão principal do WhatsApp direciona corretamente para `https://wa.me/5548991774043`.
- [x] Cada card de situação envia a mensagem pré-preenchida correspondente.
- [x] O formulário de lead funciona e abre o WhatsApp com os dados digitados.
- [x] Os eventos de conversão estão sendo disparados no Google Tag Manager / Google Ads.
- [x] O certificado SSL (cadeado de segurança HTTPS) está ativo no navegador.

---

### Conformidade Ética OAB
Esta landing page foi desenvolvida estritamente de acordo com o Provimento nº 205/2021 do Conselho Federal da OAB e o Código de Ética e Disciplina da Advocacia.
