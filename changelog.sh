#!/usr/bin/env bash

###########################
# Git Changelog Generator #
#      By: HorusHe4rt     #
###########################

file=CHANGELOG.md

header="# CHANGELOG
> This changelog is automaticaly generated.
> If you find any issue with this file, please report to the devs.

## [Unreleased]
"

echo "$header" > $file

function log_by_tag() {
	if [[ $2 == "HEAD" ]]; then
		git log $1..$2 --pretty=" - [%h] %s (%an)" >> $file
	elif [[ -z $2 ]]; then
		echo "## [$1]" >> $file
                git log $1 --pretty=" - [%h] %s (%an)" >> $file
	else
		echo "## [$2]" >> $file
        	git log $1..$2 --pretty=" - [%h] %s (%an)" >> $file
	fi

	echo "" >> $file
}

tags=$(git tag --sort=-v:refname)

if [[ -z ${tags[*]} ]]; then
	echo -e "\e[33;1m[⚠️] Your repo does not have any git tags!\e[39;21m"
	echo ""
	echo "Generating a plain changelog..."

	git log "HEAD" --pretty=" - [%h] %s (%an)" >> $file

	exit 0
else
	echo -e "\e[32;1m[✔️] Your repo does have git tags!\e[39;21m"
	echo ""
	echo "Generating a pretty changelog..."

	tag=("HEAD")
	prev=""

	for p in ${tags[@]}; do
		prev=$p
		log_by_tag $prev $tag
		tag=$prev
	done

	log_by_tag $prev

	exit 0
fi
