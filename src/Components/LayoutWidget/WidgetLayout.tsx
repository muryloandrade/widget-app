import GridLayout from 'react-grid-layout'
import { IWidget } from '../../interface/IWidget'
import { useCallback, useEffect, useState } from 'react'
import { useGetWidgetsQuery } from '../../services/widget'


export const WidgetLayout = () => {
    const [layout, setLayout] = useState<IWidget[]>([])
    const onLayoutChange = (layout: any): void => {
        setLayout(layout)
      }

    // const [testeSave] = usePostWidgetMutation()

    const {data,isSuccess,isLoading,isError} = useGetWidgetsQuery("teste")

    // Daqui até a linha 30 é para exibir os dados no banco e o tratamento de carregamento e erro
    useEffect(() => {
        if(isSuccess){
            setLayout(data)
        }
    }, [data,isSuccess])

    if(isLoading){
        return <h1>Carregando...</h1>
    }
    if(isError){
        return <h1>Erro</h1>
    }


    
    return(
      <div>
        <GridLayout
              cols={12}
              rowHeight={30}
              width={1800}
              layout={layout}
              compactType='horizontal'
              onLayoutChange={onLayoutChange}
              >
            {layout.map((item) => (
                <div key={item.i} data-grid={item} style={{backgroundColor:"white"}}>
                    <h1>Widget {item.i}</h1>
                </div>
            ))}
        </GridLayout>
    </div>
    )
}
