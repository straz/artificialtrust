#!/usr/bin/env python3

import os
import re
from pathlib import Path

ROOT = Path(__file__).parents[1]
TEMPLATE_PATH = Path(__file__).parent / 'mdx.template'
TEMPLATE = open(TEMPLATE_PATH).read()

BEGIN = re.compile("{%\s+begin\s+split\s+%}")
MIDDLE = re.compile("{%\s+middle\s+split\s+%}")
END = re.compile("{%\s+end\s+split\s+%}")

def main():
    for path in files_with_suffix(ROOT, ".mdx"):
        generate_mdx(path)

def generate_mdx(mdx_path):
    md_path = mdx_path.with_suffix(".md")
    with open(md_path) as rfp:
        md_body = rfp.read()
    # expand using template
    mdx_body = open(mdx_path).read()
    expanded = expand_macros(mdx_body)
    if md_path.exists() and expanded != md_body:
        # Something has changed since previous save
        print(f'Generating {md_path}')
        with open(md_path, "w") as wfp:
            wfp.write(expanded)

def expand_macros(source):
    """
    find begin/middle/end macros in source and expand them
    :param source: source string to expand
    :return: expanded string
    """
    result = []
    for chunk in BEGIN.split(source):
        if MIDDLE.search(chunk):
            result.append(expand_chunk(chunk))
        else:
            result.append(chunk)
    return ''.join(result)

def expand_chunk(chunk):
    midsplits = MIDDLE.split(chunk)
    assert len(midsplits) == 2
    left = midsplits[0]
    endsplits = END.split(midsplits[1])
    assert len(endsplits) == 2
    right = endsplits[0]
    end = endsplits[1]
    out1 = TEMPLATE.replace('<left>', left)
    out2 = out1.replace('<right>', right)
    return out2 + end

def files_with_suffix(root, suffix):
    for root, dirs, files in os.walk(root):
        for file in files:
            if Path(file).suffix == suffix:
                yield Path(root) / file


if __name__ == "__main__":
    main()
