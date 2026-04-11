# 🚀 DEPLOY WEIGHTWISEHEALTH.COM - INSTRUÇÕES

## ✅ O QUE ESTÁ PRONTO

Site completo com:
- ✅ Next.js 14 + TypeScript
- ✅ 3 idiomas (EN 🇺🇸 | ES 🇪🇸 | PT 🇧🇷)
- ✅ Design profissional médico
- ✅ Homepage + Blog + About + Research
- ✅ Artigo exemplo completo (Testosterone Cypionate)
- ✅ Newsletter signup
- ✅ Responsivo mobile/desktop
- ✅ SEO otimizado

## 📦 PASSO 1: UPLOAD PARA GITHUB

1. Va em: https://github.com/new
2. Repository name: `weightwisehealth`
3. Description: "Evidence-based hormone optimization platform"
4. Public (deixe público)
5. **NÃO marque** "Initialize with README" (já temos)
6. Click "Create repository"

7. Na página que abrir, copie os comandos que aparecem em "…or push an existing repository from the command line"

Serão 3 linhas tipo:
```
git remote add origin https://github.com/SEU-USERNAME/weightwisehealth.git
git branch -M main
git push -u origin main
```

8. **Execute esses comandos dentro da pasta /home/claude/weightwisehealth**

OU

**Baixe todos os arquivos e faça upload manual:**
- Download tudo de /home/claude/weightwisehealth
- Upload no GitHub via web interface

## 🚀 PASSO 2: DEPLOY NO VERCEL

1. Va em: https://vercel.com
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Selecione `weightwisehealth` da lista
5. Click "Import"
6. **NÃO MUDE NADA** nas configurações
7. Click "Deploy"
8. Aguarde 2-3 minutos
9. ✅ SITE NO AR!

Vercel vai gerar URL tipo: `weightwisehealth.vercel.app`

## 🌐 PASSO 3: CONECTAR SEU DOMÍNIO

1. No Vercel, vá em Settings → Domains
2. Click "Add Domain"
3. Digite: `weightwisehealth.com`
4. Click "Add"

5. Vercel vai mostrar instruções DNS:
   - Vá no seu provedor DNS (onde você comprou o domínio)
   - Adicione os registros que o Vercel pedir:
     * A record: @ → IP que eles mostram
     * CNAME record: www → cname.vercel-dns.com

6. Aguarde 5-30 minutos (propagação DNS)
7. ✅ weightwisehealth.com funcionando!

## 🎉 PRONTO!

Seu site estará no ar em:
- https://weightwisehealth.com
- https://weightwisehealth.com/en (Inglês)
- https://weightwisehealth.com/es (Espanhol)
- https://weightwisehealth.com/pt (Português)

## 📝 PRÓXIMOS PASSOS

Depois do deploy:
1. Testar em mobile e desktop
2. Trocar idiomas (botões EN/ES/PT no header)
3. Navegar pelo site
4. Testar newsletter signup
5. Ler artigo exemplo

## 🆘 SE ALGO DER ERRADO

1. Vercel tem build logs (mostra o erro)
2. 99% das vezes funciona de primeira
3. Se der erro, me mande o log do build

---

**Tempo total: 10-15 minutos**
**Custo: $0 (Vercel grátis, GitHub grátis)**
