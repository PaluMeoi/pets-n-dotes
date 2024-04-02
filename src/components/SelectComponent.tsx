import React from 'react';
import {
    Select,
    SelectContent, SelectGroup,
    SelectItem, SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {AvatarComponent} from "@/components/AvatarComponent.tsx";

function makeInitial(name: String) {
    const firstLast = name.split(" ");
    return `${firstLast[0].split('')[0]}${firstLast[1].split('')[0]}`
}

export const SelectComponent = ({placeholder, items}: {placeholder: string, items: [{ selectValue: string; avatar: string; selectLabel: string }]}) => {
    console.log(items)
    // @ts-ignore
    return (
        <Select>
            <SelectTrigger className="w-[300px]">
        <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Characters</SelectLabel>
            {items.map((item: { selectValue: string; avatar: string; selectLabel: string }) => (
                <SelectItem key={item.selectValue} value={item.selectValue}>
                    <div className="character">
                        {/*// @ts-ignore*/}
                        <AvatarComponent client:load src={item.avatar} alt={item.selectLabel}
                                         fallbackText={makeInitial(item.selectLabel)} cName={"size-5"}/>
                        <div><span style={{marginLeft: "1em", display: "flex"}}>{item.selectLabel}</span>
                            {/*<Badge style={{marginLeft: "1em", objectFit: "contain"}}>{item.playerWorld}</Badge>*/}
                        </div>
                    </div>
                </SelectItem>
            ))}
            </SelectGroup>
        </SelectContent>
        </Select>
    )
}