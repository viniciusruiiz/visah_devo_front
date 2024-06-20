const getFolders = async (pageSize = 0, pageNumber = 0) => {
    console.log("GET FOLDERS MOCK", pageSize, pageNumber);

    return new Promise((resolve) => {
        resolve([{
            name: "Filipenses",
            subfolders: [{
                name: "Filipenses 3",
                subfolders: [{
                    name: "Aplicações práticas",
                    htmlContent: `
                    - Não há Jesus como primeiro lugar. Ele é tudo. Ele é o centro. Jesus é aquele diante do qual todo o resto perde o sentido.<br />
                    - Deus não veio para nos dar uma boa vida nos nossos termos. Ele veio para nos mostrar o que é a boa vida, para, a partir de então, vivermos.<br />
                    - Há um poder que alcançou Paulo que fez todo o resto perder a importância, ser inútil. Devemos ansiar por ver esse mesmo poder nos transformar e nos fazer perceber tudo aquilo que nos é tão caro como menos que pó diante da vida encontrada em Cristo.<br />
                    - Devemos ser fiéis ao que Deus nos entregar enquanto Ele nos entregar, entendendo que é pela graça Dele que podemos fazer todas as coisas.<br />
                    - Deve ser um desejo da Igreja a unidade plena, mesmo em pensamento, na sã doutrina, evitando dissensões carnais que a nada levam.<br />
                    - Nossa pátria é o céu. Naturalmente, nossa cultura, modo de vida, revelarão o modo de vida do céu.`
                }, {
                    name: "Estudo",
                    htmlContent: `
                    - Não há Jesus como primeiro lugar. Ele é tudo. Ele é o centro. Jesus é aquele diante do qual todo o resto perde o sentido.<br />
                    - Deus não veio para nos dar uma boa vida nos nossos termos. Ele veio para nos mostrar o que é a boa vida, para, a partir de então, vivermos.<br />
                    - Há um poder que alcançou Paulo que fez todo o resto perder a importância, ser inútil. Devemos ansiar por ver esse mesmo poder nos transformar e nos fazer perceber tudo aquilo que nos é tão caro como menos que pó diante da vida encontrada em Cristo.<br />
                    - Devemos ser fiéis ao que Deus nos entregar enquanto Ele nos entregar, entendendo que é pela graça Dele que podemos fazer todas as coisas.<br />
                    - Deve ser um desejo da Igreja a unidade plena, mesmo em pensamento, na sã doutrina, evitando dissensões carnais que a nada levam.<br />
                    - Nossa pátria é o céu. Naturalmente, nossa cultura, modo de vida, revelarão o modo de vida do céu.`
                }]
            }, {
                name: "Filipenses 4",
                subfolders: [{
                    name: "Aplicações práticas",
                    htmlContent: `
                    - Não há Jesus como primeiro lugar. Ele é tudo. Ele é o centro. Jesus é aquele diante do qual todo o resto perde o sentido.<br />
                    - Deus não veio para nos dar uma boa vida nos nossos termos. Ele veio para nos mostrar o que é a boa vida, para, a partir de então, vivermos.<br />
                    - Há um poder que alcançou Paulo que fez todo o resto perder a importância, ser inútil. Devemos ansiar por ver esse mesmo poder nos transformar e nos fazer perceber tudo aquilo que nos é tão caro como menos que pó diante da vida encontrada em Cristo.<br />
                    - Devemos ser fiéis ao que Deus nos entregar enquanto Ele nos entregar, entendendo que é pela graça Dele que podemos fazer todas as coisas.<br />
                    - Deve ser um desejo da Igreja a unidade plena, mesmo em pensamento, na sã doutrina, evitando dissensões carnais que a nada levam.<br />
                    - Nossa pátria é o céu. Naturalmente, nossa cultura, modo de vida, revelarão o modo de vida do céu.`
                }, {
                    name: "Estudo",
                    htmlContent: `
                    - Não há Jesus como primeiro lugar. Ele é tudo. Ele é o centro. Jesus é aquele diante do qual todo o resto perde o sentido.<br />
                    - Deus não veio para nos dar uma boa vida nos nossos termos. Ele veio para nos mostrar o que é a boa vida, para, a partir de então, vivermos.<br />
                    - Há um poder que alcançou Paulo que fez todo o resto perder a importância, ser inútil. Devemos ansiar por ver esse mesmo poder nos transformar e nos fazer perceber tudo aquilo que nos é tão caro como menos que pó diante da vida encontrada em Cristo.<br />
                    - Devemos ser fiéis ao que Deus nos entregar enquanto Ele nos entregar, entendendo que é pela graça Dele que podemos fazer todas as coisas.<br />
                    - Deve ser um desejo da Igreja a unidade plena, mesmo em pensamento, na sã doutrina, evitando dissensões carnais que a nada levam.<br />
                    - Nossa pátria é o céu. Naturalmente, nossa cultura, modo de vida, revelarão o modo de vida do céu.`
                }]
            }]
        }])
    })
}

const get

export { getFolders }