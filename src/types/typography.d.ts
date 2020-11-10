
export type typographyTypes =  {
    color?:
      | 'initial'
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'textPrimary'
      | 'textSecondary'
      | 'error'; 
    children?:any,
    fontSize?:String,
    fontWeight?: Number,
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify',
    display?: 'initial' | 'block' | 'inline';
    gutterBottom?: boolean;
    noWrap?: boolean;
    paragraph?: boolean;
    letterSpacing?:String,
    lineHeight? : Number,
    textAlign? : String,
    fontFamily? : String,
    variant?:any,
    className?:any
}