export const getImageurl=(path)=>
{
    return new URL(`/assets/${path}`,import.meta.url).href;
}//This function is used to for use images in assets