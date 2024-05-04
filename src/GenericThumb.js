import react, {useState, useEffect} from 'react';

export default function GenericThumb({className, category, shape}) {

    const [thumbURL, setThumbURL] = useState('');

    const chooseThumb = () => {
/*         if(shape === 'wide') {
            if(category === 'politics') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fpolitika_wide.jpg?alt=media&token=bc2ebef2-cce1-4dbd-b2ec-4d43ddbe5a00');
            if(category === 'business') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fekonomija_wide.jpg?alt=media&token=7ca52254-b464-4319-b7c2-393ba45a06ba');
            if(category === 'technology') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ftehnologija_wide.jpg?alt=media&token=53ead51f-8853-4b6b-826e-1d0b93e0504c');
            if(category === 'entertainment') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fmagazin_wide.jpg?alt=media&token=a00cfa44-0c8b-4a6a-abd0-217156cb7297');
            if(category === 'sports') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fsport_wide.jpg?alt=media&token=bcd1b8f3-ba0b-4a2c-969c-92e270223e45');

        }
        if(shape === 'square') {
            if(category === 'politics') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fpolitika_square.jpg?alt=media&token=8f8ffa20-947d-47d4-b91d-554a0554ff72');
            if(category === 'business') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fekonomija_square.jpg?alt=media&token=466add3d-f4c1-445b-84d7-11c64cebfe11');
            if(category === 'technology') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ftehnologija_square.jpg?alt=media&token=b4c682e3-1744-482b-85b5-f67c5880efbc');
            if(category === 'entertainment') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fmagazin_square.jpg?alt=media&token=58d141cb-eda6-4781-afeb-e5f7b91b01a9');
            if(category === 'sports') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fsport_square.jpg?alt=media&token=6307a1ec-3662-4ca2-8036-31a55dab2d2f');

        } */
        if(shape === 'wide') {
            if(category === 'politics') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ftamb-wide-politika.jpg?alt=media&token=18248284-700f-48a2-b17f-b263c5efd835');
            if(category === 'business') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ftamb-wide-ekonomija.jpg?alt=media&token=00876938-f22b-4b0c-91f1-4b7fbe209423');
            if(category === 'technology') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ftamb-wide-tehnologija.jpg?alt=media&token=ec7b990e-0b0e-4cad-a9d1-c872590652f3');
            if(category === 'entertainment') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ftamb-wide-magazin.jpg?alt=media&token=fe9c5d18-c07c-4545-b1b7-5ce6efbf0b09');
            if(category === 'sports') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ftamb-wide-sport.jpg?alt=media&token=ea0316c5-4614-436b-8761-f9afe2a6c199');
            
        }
        if(shape === 'square') {
            if(category === 'politics') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ftamb-square-politika.jpg?alt=media&token=31e5d4db-7e7d-4918-a95d-21effdfbfda6');
            if(category === 'business') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ftamb-square-ekonomija.jpg?alt=media&token=69536af1-0738-403b-9c87-41ef57b15141');
            if(category === 'technology') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ftamb-square-tehnologija.jpg?alt=media&token=8aa154b3-6a5c-44af-a052-c26ac44b8937');
            if(category === 'entertainment') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ftamb-square-magazin.jpg?alt=media&token=80f21dc4-e46b-49e1-ba94-faa9f8eaa669');
            if(category === 'sports') setThumbURL('https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ftamb-square-sport.jpg?alt=media&token=fdf82dff-f2be-41a1-b70d-6ed8a2528358');

        }
    }

    useEffect(prom => chooseThumb(), [category]);
    return (
            <img 
                src = {thumbURL}
                className = {className}
            >
            </img>
    )
}