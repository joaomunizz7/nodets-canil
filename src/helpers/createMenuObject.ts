type MenuOptions = ''  | 'all' |'dog' |'cat' | 'fish';
export const creatMenuObject = (activeMenu: MenuOptions) => {
    let returnObjetct = {
        all: false,
        dog:false,
        cat:false,
        fish:false 
    }
    if(activeMenu !== ''){
        returnObjetct[activeMenu] = true
    }
    return returnObjetct
}