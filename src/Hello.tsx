import React from 'react';

import { h, Properties } from 'hastscript';
import type { Plugin } from 'unified';
import { Node } from 'unist';
import { visit } from 'unist-util-visit';

// import { getReactHooks } from '../react-hooks';

import './Hello.css';

declare const growiFacade : {
  react: typeof React,
};

type FakeJson = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export const helloGROWI = (Tag: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, ...props }) => {
    try {
      const { react } = growiFacade;
      const { useEffect, useCallback, useState } = react;
      // ボタンのクリックイベントでカウントアップするためのstate
      const [count, setCount] = useState(0);
      // 外部データを取得して適用するためのstate
      const [obj, setObj] = useState<FakeJson | null>(null);

      // useEffectで外部データを取得
      const getFakeJson = async(count: number) => {
        const url = `https://jsonplaceholder.typicode.com/todos/${count}`;
        const response = await fetch(url);
        const json = await response.json() as FakeJson;
        setObj(json);
      };

      // countが変更されたら外部データを取得
      useEffect(() => {
        if (count > 0) getFakeJson(count);
      }, [count]);

      const { plugin } = JSON.parse(props.title);
      if (plugin) {
        return (
          <>
            <a {...props}>{children}</a>
            <div>Count: {count}</div>
            <button
              onClick={useCallback(() => setCount(c => c + 1), [])}
            >
              Up
            </button>
            { obj && (
              <div>
                <h2>{obj.title}</h2>
                <div>{obj.id} & {obj.userId}</div>
                <p>{obj.completed ? 'Completed' : 'Not Completed'}</p>
              </div>
            )}
          </>
        );
      }
    }
    catch (err) {
      // console.error(err);
    }
    // Return the original component if an error occurs
    return (
      <Tag {...props}>{children}</Tag>
    );
  };
};

interface GrowiNode extends Node {
  name: string;
  data: {
    hProperties?: Properties;
    hName?: string;
    hChildren?: Node[] | { type: string, value: string, url?: string }[];
    [key: string]: any;
  };
  type: string;
  attributes: {[key: string]: string}
  children: GrowiNode[] | { type: string, value: string, url?: string }[];
  value: string;
  title?: string;
  url?: string;
}


export const remarkPlugin: Plugin = () => {
  return (tree: Node) => {
    // You can use 2nd argument for specific node type
    // visit(tree, 'leafDirective', (node: Node) => {
    // :plugin[xxx]{hello=growi} -> textDirective
    // ::plugin[xxx]{hello=growi} -> leafDirective
    // :::plugin[xxx]{hello=growi} -> containerDirective
    visit(tree, (node: Node) => {
      const n = node as unknown as GrowiNode;
      if (n.name !== 'plugin') return;
      const data = n.data || (n.data = {});
      // Render your component
      const { value } = n.children[0] || { value: '' };
      data.hName = 'a'; // Tag name
      data.hChildren = [{ type: 'text', value: `${value}, growi!` }]; // Children
      // Set properties
      data.hProperties = {
        href: 'https://example.com/rss',
        title: JSON.stringify({ ...n.attributes, ...{ plugin: true } }), // Pass to attributes to the component
      };
    });
  };
};

export const rehypePlugin: Plugin = () => {
  return (tree: Node) => {
    // node type is 'element' or 'text' (2nd argument)
    visit(tree, 'text', (node: Node) => {
      const n = node as unknown as GrowiNode;
      const { value } = n;
      n.value = `${value} 😄`;
    });
  };
};
